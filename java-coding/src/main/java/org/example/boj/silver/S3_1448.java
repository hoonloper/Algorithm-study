package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class S3_1448 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());


        List<Integer> arr = new ArrayList<>();
        for(int i = 0; i < n; i++) {
            arr.add(Integer.parseInt(br.readLine()));
        }

        arr.sort(Collections.reverseOrder());

        int max = 0;
        for (int i = 0; i < n - 2; i++) {
            if(arr.get(i) < arr.get(i + 1) + arr.get(i + 2)) {
                max = Math.max(max, arr.get(i) + arr.get(i + 1) + arr.get(i + 2));
            }
        }
        System.out.println(max == 0 ? -1 : max);
    }
}
