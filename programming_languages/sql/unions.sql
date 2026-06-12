-- Union: Merge similar datasets, exclude duplicate rows
SELECT username, challenge FROM active_challenges
UNION
SELECT username, challenge FROM completed_challenges;  -- ensure same number and order of columns
/*
(John, Read)  <-- from active_challenges
(John, Yoga)  <-- from active_challenges
(Jane, Read)  <-- from completed_challenges
(Jane, Yoga)  <-- from completed_challenges
*/

-- Union all: Include duplicate rows
SELECT username, challenge FROM active_challenges
UNION ALL
SELECT username, challenge FROM completed_challenges;
/*
(John, Read)
(John, Yoga)
(John, Yoga)  <-- duplicate (exists in both tables)
(Jane, Read)
(Jane, Yoga)
*/

-- Labelling sources
SELECT username, challenge, 'Active' AS challenge_status
FROM active_challenges
UNION
SELECT username, challenge, 'Completed' AS challenge_status
FROM completed_challenges;
/*
(John, Read, Active)
(John, Yoga, Active)
(Jane, Read, Completed)
(Jane, Yoga, Completed)
*/

-- Combining sources
SELECT username, SUM(points) AS total_points
FROM (
    SELECT username, points FROM challenge_points
    UNION ALL
    SELECT username, points FROM bonus_points
) AS t
GROUP BY username;
/*
(John, 12)
(Jane, 34)
*/
