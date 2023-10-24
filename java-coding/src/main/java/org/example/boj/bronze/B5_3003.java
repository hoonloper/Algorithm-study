package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B5_3003 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] arr = br.readLine().split(" ");
        int[] origin = new int[]{1, 1, 2, 2, 2, 8};

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < 6; i++) {
            sb.append(origin[i] - Integer.parseInt(arr[i])).append(" ");
        }
        System.out.println(sb.toString());
    }
}
