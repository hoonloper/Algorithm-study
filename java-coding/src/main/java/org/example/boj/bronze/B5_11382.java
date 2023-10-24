package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B5_11382 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        long ans = 0;
        while (st.hasMoreTokens()) {
            ans += Long.parseLong(st.nextToken());
        }
        System.out.println(ans);
    }
}
