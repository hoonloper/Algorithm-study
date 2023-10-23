package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class B2_2581 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int m = Integer.parseInt(br.readLine());
        int n = Integer.parseInt(br.readLine());


        boolean[] dp = new boolean[n + 1];
        dp[0] = dp[1] = true;


        for(int i = 2; i <= n; i++) {
            if(dp[i]) continue;
            for(int j = i * 2; j <= n; j += i) {
                dp[j] = true;
            }
        }
        List<Integer> prime = new ArrayList<>();

        for(int i = m; i <= n; i++) {
            if(!dp[i]) prime.add(i);
        }
        if(prime.isEmpty()) {
            System.out.println(-1);
            return;
        }

        int min = Integer.MAX_VALUE;
        int sum = 0;
        for (int num : prime) {
            min = Math.min(num, min);
            sum += num;
        }
        System.out.println(sum);
        System.out.println(min);
    }
}
