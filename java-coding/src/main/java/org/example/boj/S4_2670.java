package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S4_2670 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 백준 DP 활용 코드
        int n = Integer.parseInt(br.readLine());
        double[] answer = new double[n];
        for(int i = 0; i < n; ++i) {
            answer[i] = Double.parseDouble(br.readLine());
            if(i != 0) {
                answer[i] = Math.max(answer[i], answer[i-1] * answer[i]);
            }
        }

        double x = 0;
        for(int i = 0; i < n; ++i) {
            x = Math.max(x, answer[i]);
        }
        System.out.printf("%.3f", x);

        // 내 풀이
//        int n = Integer.parseInt(br.readLine());
//        double[] nums = new double[n];
//
//        for(int i = 0; i < n; i++) {
//            nums[i] = Double.parseDouble(br.readLine());
//        }
//
//        double max = 0.0;
//        for(int i = 0; i < n; i++) {
//            double mul = nums[i];
//            max = Math.max(mul, max);
//            for(int j = i + 1; j < n; j++) {
//                mul *= nums[j];
//                max = Math.max(mul, max);
//            }
//        }
//        System.out.printf("%.3f", Math.round(max * 1000) / 1000.0);
    }
}
