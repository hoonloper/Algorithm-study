package org.example.topcoder.dp;

public class One_DP_Knapsack {
    public static void main(String[] args) {
        int[] ws = {3,4,1,2,3};
        int[] ps = {2,3,2,3,6};
        int maxw = 10;
//        dp(ws,ps,maxw);
//        customDp(ws, ps, maxw);
//        customDp2(ws, ps, maxw);
        customDp3(ws, ps, maxw);
    }

    private static void customDp3(int[] ws, int[] ps, int maxw) {
        int ans = 0;
        int[][] dp = new int[ws.length + 1][maxw + 1];

        for(int i = 0; i < ws.length; i++) {
            for(int j = 0; j <= maxw; j++) {
                if(j + ws[i] <= maxw) {
                    dp[i + 1][j + ws[i]] = Math.max(dp[i + 1][j + ws[i]], dp[i][j] + ps[i]);
                    ans = Math.max(dp[i + 1][j + ws[i]], ans);
                }
            }
        }
        System.out.println(ans);
    }





    private static void customDp2(int[] ws, int[] ps, int maxw) {
        int ans = 0;
        int[][] dp = new int[ws.length + 1][maxw + 1];

        for(int i = 0; i < ws.length; i++) {
            for(int j = 0; j <= maxw; j++) {
                if(j + ws[i] <= maxw) {
                    dp[i + 1][j + ws[i]] = Math.max(dp[i + 1][j + ws[i]], dp[i][j] + ps[i]);
                    ans = Math.max(ans, dp[i+1][j+ws[i]]);
                }
            }
        }
        System.out.println(ans);
    }



    private static void customDp(int[] ws, int[] ps, int maxw) {
        int ans = 0;
        int[][] dp = new int[ws.length + 1][maxw + 1];

        for(int x = 0; x < ws.length; x++) {
            for(int z = 0; z <= maxw; z++) {
                if(z + ws[x] <= maxw) {
                    dp[x + 1][z + ws[x]] = Math.max(dp[x + 1][z + ws[x]], dp[x][z] + ps[x]);
                    ans = Math.max(ans, dp[x + 1][z + ws[x]]);
                }
            }
        }
        System.out.println(ans);
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

//            System.out.println(Arrays.toString(d));
        }
    }
}
