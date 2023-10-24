package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S4_9507 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] nums = new int[n];
        int max = 0;
        for(int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(br.readLine());
            max = Math.max(nums[i], max);
        }
        long[] dp = new long[max + 1];

        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 4;

        for(int i = 4; i <= max; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3] + dp[i - 4];
        }

        StringBuilder answer = new StringBuilder();
        for(int i = 0; i < n; i++) {
            answer.append(dp[nums[i]]).append("\n");
        }
        System.out.println(answer.toString());
    }
}
