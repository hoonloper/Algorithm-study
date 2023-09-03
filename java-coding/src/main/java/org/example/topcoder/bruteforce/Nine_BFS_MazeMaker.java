package org.example.topcoder.bruteforce;

import java.util.LinkedList;
import java.util.Queue;

public class Nine_BFS_MazeMaker {
    public static void main(String[] args) {
        String[] maze = {
                ".......",
                "X.X.X..",
                "XXX...X",
                "....X..",
                "X....X.",
                "......."
        };
        int sr = 5;
        int sc = 0;
        int[] mr = {1, 0, -1, 0, -2, 1};
        int[] mc = {0, -1, 0, 1, 3, 0};
        int answer = longestPath(maze, sr, sc, mr, mc);

        System.out.println(answer);
    }

    private static int longestPath(String[] maze, int startRow, int startCol, int[] moveRow, int[] moveCol) {
        int width = maze[0].length();
        int height = maze.length;
        int[][] board = new int[height][width];

        for(int i = 0; i < height; i++) {
            for(int j = 0; j < width; j++) {
                board[i][j] = -1;
            }
        }

        board[startRow][startCol] = 0;

        Queue<Integer> queueX = new LinkedList<>();
        Queue<Integer> queueY = new LinkedList<>();
        queueX.add(startCol);
        queueY.add(startRow);

        while (!queueX.isEmpty()) {
            int x = queueX.poll();
            int y = queueY.poll();

            for(int i = 0; i < moveRow.length; i++) {
                int nextX = x + moveCol[i];
                int nextY = y + moveRow[i];

                if(checkRange(width, height, nextX, nextY) && board[nextY][nextX] == -1 && maze[nextY].charAt(nextX) == '.') {
                    board[nextY][nextX] = board[y][x] + 1;
                    queueX.add(nextX);
                    queueY.add(nextY);
                }
            }
        }

        int max = 0;
        for(int i = 0; i < height; i++) {
            for(int j = 0; j < width; j++) {
                if(maze[i].charAt(j) == '.' && board[i][j] == -1) {
                    return -1;
                }
                max = Math.max(max, board[i][j]);
            }
        }
        return max;
    }

    private static boolean checkRange(int w, int h, int nx, int ny) {
        return 0 <= nx && nx < w && 0 <= ny && ny < h;
    }
}
