package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B3_2566 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int max = 0;
        int x = 0;
        int y = 0;
        for(int i = 0; i < 9; i++) {
            String[] nums = br.readLine().split(" ");
            for(int j = 0; j < 9; j++) {
                int num = Integer.parseInt(nums[j]);
                if(num > max) {
                    max = num;
                    x = i;
                    y = j;
                }
            }
        }
        System.out.println(max);
        System.out.println((x + 1) + " " + (y + 1));
    }
}
