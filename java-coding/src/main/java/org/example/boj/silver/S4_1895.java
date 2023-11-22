package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class S4_1895 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] strs = br.readLine().split(" ");
        int x = Integer.parseInt(strs[0]);
        int y = Integer.parseInt(strs[1]);

        String[][] arr = new String[x][y];
        for(int i = 0; i < x; i++) {
            arr[i] = br.readLine().split(" ");
        }

        int k = Integer.parseInt(br.readLine());


        int[] dp = new int[9];
        int g = (x - 2) * (y - 2);
        int[] ans = new int[g];
        int sh = 0;
        for(int i = 0; i < x - 2; i++){
            int count = 0;
            for(int j = 0; j < y - 2; j++){
                dp[count] = Integer.parseInt(arr[i][j]);
                dp[count + 1] = Integer.parseInt(arr[i][j + 1]);
                dp[count + 2] = Integer.parseInt(arr[i][j + 2]);
                dp[count + 3] = Integer.parseInt(arr[i + 1][j]);
                dp[count + 4] = Integer.parseInt(arr[i + 1][j + 1]);
                dp[count + 5] = Integer.parseInt(arr[i + 1][j + 2]);
                dp[count + 6] = Integer.parseInt(arr[i + 2][j]);
                dp[count + 7] = Integer.parseInt(arr[i + 2][j + 1]);
                dp[count + 8] = Integer.parseInt(arr[i + 2][j + 2]);
                Arrays.sort(dp);
                ans[sh] = dp[4];
                sh++;
            }
        }
        int answer = 0;
        for(int i = 0; i < sh; i++){
            if(ans[i] >= k) {
                answer++;
            }
        }
        System.out.println(answer);
    }
}
