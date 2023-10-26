package org.example.level0;

import java.util.Arrays;

public class 최빈값구하기 {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 1, 2, 3};
        solution(arr);
    }

    private static void solution(int[] array) {
        int[] nums = new int[1001];

        for (int i = 0; i < array.length; i++) {
            nums[array[i]]++;
        }

        int[][] res = new int[1001][2];
        for(int i = 0; i < nums.length; i++) {
            res[i] = new int[]{i, nums[i]};
        }
        Arrays.sort(res, (a, b) -> b[1] - a[1]);

        if(res[0][1] == res[1][1]) {
            System.out.println(-1);
        } else {
            System.out.println(res[0][0]);
        }
    }
}
