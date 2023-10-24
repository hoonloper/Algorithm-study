package org.example.boj.silver;

import java.io.*;
public class S2_11048 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] nm = br.readLine().split(" ");
        int n = Integer.parseInt(nm[0]);
        int m = Integer.parseInt(nm[1]);

        String[][] arr = new String[n][];
        for(int i = 0; i < n; i++) {
            arr[i] = br.readLine().split(" ");
        }

        int[][] board = new int[n + 1][m + 1];
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= m; j++) {
                int current = Integer.parseInt(arr[i - 1][j - 1]);
                int left = board[i][j - 1] + current;
                int leftTop = board[i - 1][j - 1] + current;
                int top = board[i - 1][j] + current;
                board[i][j] = Math.max(leftTop, left);
                board[i][j] = Math.max(board[i][j], top);
            }
        }
        System.out.println(board[n][m]);
    }
}
