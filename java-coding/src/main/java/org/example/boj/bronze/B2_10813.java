package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B2_10813 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] mn = br.readLine().split(" ");

        int[] n = new int[Integer.parseInt(mn[0])];
        for(int i = 0; i < Integer.parseInt(mn[0]); i++) {
            n[i] = i + 1;
        }

        for(int i = 0; i < Integer.parseInt(mn[1]); i++) {
            String[] arr = br.readLine().split(" ");
            int temp = n[Integer.parseInt(arr[0]) - 1];
            n[Integer.parseInt(arr[0]) - 1] = n[Integer.parseInt(arr[1]) - 1];
            n[Integer.parseInt(arr[1]) - 1] = temp;
        }

        StringBuilder ans = new StringBuilder();
        for(int i = 0; i < Integer.parseInt(mn[0]); i++) {
            ans.append(n[i]).append(" ");
        }
        System.out.println(ans.toString());
    }
}
