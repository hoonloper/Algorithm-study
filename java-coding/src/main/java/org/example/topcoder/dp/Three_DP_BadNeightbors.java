package org.example.topcoder.dp;
public class Three_DP_BadNeightbors {
    public static void main(String[] args) {
//        int[] donations = {10, 3, 2, 5, 7, 8};
//        int[] donations = {11, 15};
        int[] donations = {1, 2, 3, 4, 5, 1, 2, 3, 4, 5};
//        maxDonation(donations);
        customMaxDonation(donations);
    }

    private static void customMaxDonation(int[] donations) {
        int size = donations.length;
        int[] dp = new int[size];
        int ans = 0;

        for(int i = 0; i < size - 1; i++) {
            dp[i] = donations[i];
            if(i > 0) dp[i] = Math.max(dp[i], dp[i - 1]);
            if(i > 1) dp[i] = Math.max(dp[i], dp[i - 2] + donations[i]);
            ans = Math.max(ans, dp[i]);
        }

        for(int i = 0; i < size - 1; i++) {
            dp[i] = donations[i + 1];
            if(i > 0) dp[i] = Math.max(dp[i], dp[i - 1]);
            if(i > 1) dp[i] = Math.max(dp[i], dp[i - 2] + donations[i]);
            ans = Math.max(ans, dp[i]);
        }

        System.out.println(ans);
    }


    private static void maxDonation(int[] donations) {
        int i;
        int ans = 0;

        int N = donations.length;
        int[] dp = new int[N];

        for(i = 0; i < N - 1; i++) {
            dp[i] = donations[i];
            if(i > 0) dp[i] = Math.max(dp[i], dp[i - 1]);
            if(i > 1) dp[i] = Math.max(dp[i], dp[i - 2] + donations[i]);
            ans = Math.max(ans, dp[i]);
        }

        for(i = 0; i < N - 1; i++) {
            dp[i] = donations[i + 1];
            if(i > 0) dp[i] = Math.max(dp[i], dp[i - 1]);
            if(i > 1) dp[i] = Math.max(dp[i], dp[i - 2] + donations[i + 1]);
            ans = Math.max(ans, dp[i]);
        }

        System.out.println(ans);

        // 초기 풀이
//        int[] arr = new int[donations.length * 2];
//        for(int i = 0; i < arr.length; i++) {
//            if(i >= donations.length) {
//                arr[i] = donations[i - donations.length];
//            } else {
//                arr[i] = donations[i];
//            }
//        }
//
//        int max = 0;
//        for(int i = 0; i <donations.length; i++) {
//            int sum = 0;
//            for(int j = i; j < i + donations.length; j += 2) {
//                System.out.println(j + " " + arr[j]);
//                sum += arr[j];
//            }
//            System.out.println();
//            max = Math.max(max, sum);
//        }
//        System.out.println(max);

    }
}
