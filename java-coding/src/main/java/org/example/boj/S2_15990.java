package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S2_15990 {
    public static void main(String[] args) throws IOException {
        int MOD = 1_000_000_009;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int t = Integer.parseInt(br.readLine());

        long[][] dp = new long[100_001][4];
        dp[1][1] = 1;
        dp[2][2] = 1;
        dp[3][1] = 1;
        dp[3][2] = 1;
        dp[3][3] = 1;
        for(int i = 4; i < 100001; i++) {
            dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
            dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
            dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
        }

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < t; i++) {
            long[] nums = dp[Integer.parseInt(br.readLine())];
            sb.append((nums[1] + nums[2] + nums[3]) % MOD).append("\n");
        }
        System.out.println(sb.toString());
    }
}
