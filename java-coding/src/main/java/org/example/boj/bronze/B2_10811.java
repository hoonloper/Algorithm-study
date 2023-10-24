package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B2_10811 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] nm = br.readLine().split(" ");
        int n = Integer.parseInt(nm[0]);
        int m = Integer.parseInt(nm[1]);

        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = i + 1;
        }

        for(int i = 0; i < m; i++) {
            String[] se = br.readLine().split(" ");
            int s = Integer.parseInt(se[0]) - 1;
            int e = Integer.parseInt(se[1]) - 1;

            while (s < e) {
                int temp = arr[s];
                arr[s++] = arr[e];
                arr[e--] = temp;
            }
        }

        StringBuilder ans = new StringBuilder();
        for(int i = 0; i < n; i++) {
            ans.append(arr[i]).append(" ");
        }
        System.out.println(ans.toString());
    }
}
