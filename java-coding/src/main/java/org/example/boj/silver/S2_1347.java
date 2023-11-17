package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S2_1347 {
    private static String DOT = ".";
    private static String[][] board = new String[101][101];
    private static int[] mx = new int[]{1, 0, -1, 0};
    private static int[] my = new int[]{0, -1, 0, 1};
    private static int moveIdx = 0;
    private static int cx = 50;
    private static int cy = 50;

    private static int minX = 50;
    private static int minY = 50;
    private static int maxX = 50;
    private static int maxY = 50;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        String[] arr = br.readLine().split("");

        setBoardXY(cx, cy, DOT);

        for (String command : arr) {
            switch (command) {
                case "R": {
                    rotateR();
                    break;
                }
                case "L": {
                    rotateL();
                    break;
                }
                case "F": {
                    move();
                    compareMinMax();
                    setBoardXY(cx, cy, DOT);
                }
            }
        }

        printBoard();
    }
    private static void printBoard() {
        StringBuilder sb = new StringBuilder();

        for(int i = minX; i <= maxX; i++) {
            for(int j = minY; j <= maxY; j++) {
                sb.append(board[i][j] == null ? "#" : board[i][j]);
            }
            sb.append("\n");
        }

        System.out.println(sb);
    }

    private static void rotateR() {
        moveIdx = moveIdx + 1 > 3 ? 0 : moveIdx + 1;
    }
    private static void rotateL() {
        moveIdx = moveIdx - 1 < 0 ? 3 : moveIdx - 1;
    }
    private static void move() {
        cx += mx[moveIdx];
        cy += my[moveIdx];
    }

    private static void compareMinMax() {
        minX = Math.min(minX, cx);
        minY = Math.min(minY, cy);
        maxX = Math.max(maxX, cx);
        maxY = Math.max(maxY, cy);
    }

    private static void setBoardXY(int x, int y, String value) {
        board[x][y] = value;
    }
}
