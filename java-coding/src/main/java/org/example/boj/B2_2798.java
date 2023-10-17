package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B2_2798 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] nm = br.readLine().split(" ");

        String[] nums = br.readLine().split(" ");

        int n = Integer.parseInt(nm[0]);
        int m = Integer.parseInt(nm[1]);

        int result = 0;
        boolean end = false;
        for (int i = 0; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; k < n; k++) {
                    int temp = Integer.parseInt(nums[i]) + Integer.parseInt(nums[j]) + Integer.parseInt(nums[k]);

                    if (m == temp) {
                        result = temp;
                        end = true;
                        break;
                    }

                    if (result < temp && temp < m) {
                        result = temp;
                    }
                }
                if (end) break;
            }
            if (end) break;
        }
        System.out.println(result);
    }
}
