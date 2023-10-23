package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S3_1929 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] mn = br.readLine().split(" ");
        int m = Integer.parseInt(mn[0]);
        int n = Integer.parseInt(mn[1]);

        boolean[] dp = new boolean[n + 1];
        dp[0] = dp[1] = true;

        for(int i = 2; i <= Math.sqrt(n + 1); i++) {
            if(dp[i]) continue;
            for(int j = i * i; j < (n + 1); j += i) {
                dp[j] = true;
            }
        }
        StringBuilder sb = new StringBuilder();
        for(int i = m; i <= n; i++) {
            if(!dp[i]) sb.append(i).append("\n");
        }
        System.out.println(sb.toString());
    }
}
