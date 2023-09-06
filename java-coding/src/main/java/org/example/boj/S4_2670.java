package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S4_2670 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        double[] nums = new double[n];

        for(int i = 0; i < n; i++) {
            nums[i] = Double.parseDouble(br.readLine());
        }

        double max = 0.0;
        for(int i = 0; i < n; i++) {
            double mul = nums[i];
            max = Math.max(mul, max);
            for(int j = i + 1; j < n; j++) {
                mul *= nums[j];
                max = Math.max(mul, max);
            }
        }
        System.out.printf("%.3f", Math.round(max * 1000) / 1000.0);
    }
}
