package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class B2_25305 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] arr = br.readLine().split(" ");
        int n = Integer.parseInt(arr[0]);
        int k = Integer.parseInt(arr[1]);

        StringTokenizer st = new StringTokenizer(br.readLine());

        String[] scores = new String[n];
        for(int i = 0; i < n; i++) {
            scores[i] = st.nextToken();
        }

        Arrays.sort(scores, (a, b) -> Integer.parseInt(b) - Integer.parseInt(a));

        System.out.println(scores[k - 1]);
    }
}