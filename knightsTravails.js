// Knights Travails

/*
    knightMoves function that uses graph traversal and outputs
    the shortest path for knight on a chessboard.
*/

function knightMoves (start, end) {
    const validMoves = [
        [1, 2], [1, -2], [-1, 2], [-1, -2],
        [2, 1], [2, -1], [-2, 1], [-2, -1]
    ];

    // Check if coordinate valid within chess board
    const isValid = (coordinates) => {
        let [x,y] = coordinates;
        
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
            return true;  
        } else {
            return false;  
        }
    }

    const queue = []; // Array queue to store positions
    queue.push([start, [start]]); // Add the starting pos

    const visited = new Set(); // Track visitied positions
    visited.add(start.toString());
    
    // BFS loop
    while (queue.length > 0) {
        // Get current position and path
        let [currentPos, path] = queue.shift(); 
        let [x, y] = currentPos;

        // Print entire path when end pos is reached
        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(position => console.log(position));
            return;
        }

        // Try all valid knight moves
        for (const [dx, dy] of validMoves) {
            let newX = x + dx;
            let newY = y + dy;
            let newCoord = [newX, newY];

            // Check if new position valid and hasn't been visited 
            if (isValid(newCoord) && !visited.has(newCoord.toString())) {
                // Add new coord and mark as visited
                queue.push([newCoord, [...path, newCoord]]);
                visited.add(newCoord.toString()); 
            }
        }
    }
}

knightMoves([3,3],[4,3]);
