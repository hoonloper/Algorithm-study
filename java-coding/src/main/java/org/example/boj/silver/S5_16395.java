package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S5_16395 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] strs = br.readLine().split(" ");
        int n = Integer.parseInt(strs[0]);
        int k = Integer.parseInt(strs[1]);

        int[][] arr = new int[n][n + 1];

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                arr[i][j] = 0;
            }
        }
        arr[0][0] = 1;

        for(int i = 1; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(j == 0) {
                    arr[i][j] = 1;
                    continue;
                }
                if(arr[i - 1][j - 1] == 0 && arr[i - 1][j] == 0) {
                    break;
                }
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }

        System.out.println(arr[n - 1][k - 1]);
    }
}
