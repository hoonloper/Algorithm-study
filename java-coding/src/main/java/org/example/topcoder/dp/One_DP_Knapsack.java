package org.example.topcoder.dp;

import java.util.Arrays;

public class One_DP_Knapsack {
    public static void main(String[] args) {
        int[] ws = {3,4,1,2,3};
        int[] ps = {2,3,2,3,6};
        int maxw = 10;
        dp(ws,ps,maxw);
    }



    private static void dp(int[] ws, int[] ps, int maxw) {
        int[][] dp = new int[6][11];
        int ret = 0;

        for(int x = 0; x < ws.length; x++) {
            for(int z = 0; z <= maxw; z++) {
                if(z + ws[x] <= maxw) {
                    dp[x + 1][z + ws[x]] = Math.max(dp[x + 1][z + ws[x]], dp[x][z] + ps[x]);
                    ret = Math.max(dp[x+1][z + ws[x]], ret);
                }
            }
        }

        for(int[] d : dp) {

            System.out.println(Arrays.toString(d));
        }
    }
}
