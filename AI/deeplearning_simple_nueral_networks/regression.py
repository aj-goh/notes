import numpy as np
import torch as tr
from alive_progress import alive_bar
import h5py
import time
from typing import List, Tuple, Dict, Any

class LinearRegression:
    def __init__ (self):
        self.w = np.random.randn()
        self.b = np.random.randn()
        self.learning_rate = 0.001
        self.batch_size = 16
        self.epochs = 100001
        self.workers = 8
        self.optimizer = "Adam"
        self.loss_type = "MSE"
        self.pre_trained_model = None
        self.tags_yaml = None
        self.loss = float("inf")
        self.annealing = "cosine"
        self.device = tr.device("cuda:0" if tr.cuda.is_available() else "cpu")
        self.loss_history = []
        self.sum_momentum_w = 0
        self.sum_variance_w = 0
        self.sum_variance_b = 0
        self.sum_momentum_b = 0


    def forward(self, X, w, b) -> List:
        # 计算预测值
        y_pred = []
        for x in X:
            y_pred.append(x * w + b)
        return y_pred

    def compute_loss(self, y_pred, y_true):
        if self.loss_type.lower() == "mse":
            loss = []
            for i in range(len(y_pred)):
                loss.append((y_pred[i] - y_true[i]) ** 2)
            return np.mean(loss)
        else:
            raise KeyboardInterrupt("Sorry , i didnt learn any other loss calculation method yet")

    def compute_gradients_w(self, X, y_pred, y_true):
        if self.loss_type.lower() == "mse":
            gradients = []
            for i in range(len(X)):
                gradients.append(2 * (y_pred[i] - y_true[i]) * X[i])
            return np.mean(gradients)
        else:
            raise KeyboardInterrupt("Sorry , i didnt learn any other loss calculation method yet")

    def compute_gradients_b(self, X, y_pred, y_true):
        if self.loss_type.lower() == "mse":
            gradients = []
            for i in range(len(X)):
                gradients.append(2 * (y_pred[i] - y_true[i]))
            return np.mean(gradients)
        else:
            raise KeyboardInterrupt("Sorry , i didnt learn any other loss calculation method yet")

    def Adam(self, EPOCH, GRADIENT_W, GRADIENT_B, beta1=0.9, beta2=0.99):
        """
        This is the adam optimizer wrote manually by myself, with the reference of functions taught by Gemini3.1pro(LLM).
        1. momentum (store the history of the vectors of the gradients, so that some 震荡 may 抵消， some 同一方向上的奔跑 may 放大)
        2. variance (control the speed of the 奔跑， store the 平方值 of the gradients, like the distance already ran. if too fast/ distance too much, then will be punished/ran slower);
        其实 w 和 b 的 gradients 应该放在同一个 **向量vector** 里的, 无奈我 numpy 不精, 所以把 w 和 b 都拆开存在variables里面
        """
        self.sum_momentum_w = (self.sum_momentum_w * beta1) + ((1-beta1)*GRADIENT_W)
        self.sum_momentum_b = (self.sum_momentum_b * beta1) + ((1-beta1)*GRADIENT_B)
        self.sum_variance_w = (self.sum_variance_w * beta2) + ((1-beta2)*(GRADIENT_W**2))
        self.sum_variance_b= (self.sum_variance_b * beta2) + ((1-beta2)*(GRADIENT_B**2))

        momentum_w_after_bias_correction = self.sum_momentum_w / (1 - beta1**EPOCH)
        momentum_b_after_bias_correction = self.sum_momentum_b / (1 - beta1**EPOCH)
        variance_w_after_bias_correction = self.sum_variance_w / (1 - beta2**EPOCH)
        variance_b_after_bias_correction = self.sum_variance_b / (1 - beta2**EPOCH)

        return momentum_w_after_bias_correction, momentum_b_after_bias_correction, variance_w_after_bias_correction, variance_b_after_bias_correction

    def new_w_b(self, original_w, original_b, gradient_w, gradient_b, lr=None, epoch=None, epsilong=(3*(10**-8)) ):
        """
        you believe in light?
        epsilong is the light, lol.
        why?
        since it 3*10^8
        negative 8 is also 8
        """
        if lr == None:
            lr = self.learning_rate # if no input, use default value

        update_of_w = None
        update_of_b = None

        if (self.optimizer.lower() == 'adam' or self.optimizer.lower() == 'adamw') and (epoch!=None):
            mw, mb, vw, vb = self.Adam(epoch, gradient_w, gradient_b)
            update_of_w =  mw / ((vw)**0.5 + epsilong)
            update_of_b =  mb / ((vb)**0.5 + epsilong)
        else:
            update_of_w = gradient_w
            update_of_b = gradient_b

        return (original_w - lr * update_of_w), (original_b - lr * update_of_b)


    def train_w(self, x_true, y_true):
        lr = self.learning_rate
        w = self.w
        b = self.b
        epoch = self.epochs
        loss = self.loss
        with alive_bar(epoch) as bar:
            for _ in range(1, epoch):
                y_predicted = self.forward(x_true, w, b)
                loss = self.compute_loss(y_predicted, y_true)
                gradient_w = self.compute_gradients_w(x_true, y_predicted, y_true)
                gradient_b = self.compute_gradients_b(x_true, y_predicted, y_true)
                w, b = self.new_w_b(original_w=w, original_b=b, gradient_w=gradient_w, gradient_b=gradient_b, epoch=_)
                self.w = w
                self.b = b
                if _% 1000 == 0:
                    print(f"epoch={_}/{epoch}, loss={loss}, Map@50=is_not_classification, Map@50:95=is_not_classification, F1-score==is_not_classification, accuracy=unavailable")
                    self.loss_history.append(loss)
                time.sleep(0.000001)
                bar()
        self.w = w
        self.b = b
        return w, b
    
    def save_weights(self, filepath='model.h5'):
        """保存模型权重"""
        """保存为HDF5格式(适合大模型)"""
        with h5py.File(filepath, 'w') as f:
            # 创建组
            weights_group = f.create_group('weights')
            weights_group.create_dataset('w', data=self.w)
            weights_group.create_dataset('b', data=self.b)
            
            # 保存历史
            f.create_dataset('loss_history', data=np.array(self.loss_history))
            
            # 保存元数据
            f.attrs['learning_rate'] = self.learning_rate
            f.attrs['epochs'] = self.epochs
        
        print(f"model saved successfully, path={filepath}")
    
    def load_weights(self, filepath='model.h5'):
        """加载模型权重"""
        with h5py.File(filepath, 'r') as f:
            self.w = float(f['weights/w'][()])
            self.b = float(f['weights/b'][()])
            self.loss_history = f['loss_history'][()].tolist()
            self.learning_rate = f.attrs['learning_rate']
            self.epochs = f.attrs['epochs']
        
        print(f"model loaded successfully")


def main():
    x = np.array([1,2,3,4,5,6,7,8,9,10])
    y = np.array([
    1,4,9,16,25,
    36,49,64,81,100
])
    training = LinearRegression()
    
    try:
        w, b = training.train_w(x, y)
    except KeyboardInterrupt:
        print("\n training interrupted, 使用当前参数")
        w, b = training.w, training.b  # 使用当前值
    
    return training  # 返回整个模型对象


if __name__ == "__main__":
    model = main()
    print(f"final result: y = {model.w:.4f}x + {model.b:.4f}")
    model.save_weights('linear.h5')