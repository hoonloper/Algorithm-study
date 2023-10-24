package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S1_1890 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        String[][] arr = new String[n][];

        for(int i = 0; i < n; i++) {
            arr[i] = br.readLine().split(" ");
        }

        long[][] board = new long[n][n];

        board[0][0] = 1;

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(Long.parseLong(arr[i][j]) == 0) {
                    break;
                }
                if(board[i][j] > 0) {
                    long jump = Long.parseLong(arr[i][j]);
                    int b = (int) (i + jump);
                    int r = (int) (j + jump);
                    boolean bJump = (b) < n;
                    boolean rJump = (r) < n;
                    if(bJump) {
                        board[b][j] += board[i][j];
                    }
                    if(rJump) {
                        board[i][r] += board[i][j];
                    }
                }
            }
        }
        System.out.println(board[n - 1][n - 1]);
    }
}
