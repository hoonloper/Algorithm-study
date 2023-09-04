package org.example.topcoder.dp;

import java.util.Arrays;

public class One_DP_Knapsack {
    public static void main(String[] args) {
        int[] ws = {3,4,1,2,3};
        int[] ps = {2,3,2,3,6};
        int maxw = 10;
        dp(ws,ps,maxw);
    }

    public static void dp(int[] ws, int[] ps, int maxw) {
        int[][] dp = new int[6][11];
        int ret = 0;

        for(int i = 0; i < ws.length; i++) {
            for(int j = 0; j <= maxw; j++) {
                if(j + ws[i] <= maxw) {
                    dp[i + 1][j + ws[i]] = Math.max(dp[i + 1][j + ws[i]], dp[i][j] + ps[i]);
                    ret = Math.max(dp[i+1][j + ws[i]], ret);
                }
            }
        }

        for(int[] d : dp) {

            System.out.println(Arrays.toString(d));
        }
    }
}
