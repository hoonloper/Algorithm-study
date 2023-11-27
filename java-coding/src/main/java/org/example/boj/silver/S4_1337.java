package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class S4_1337 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        List<Integer> list = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            list.add(Integer.parseInt(br.readLine()));
        }

        Collections.sort(list);

        int[] counts = new int[n];

        for (int i = 0; i < n; i++) {
            for (int j = 1; j < 5; j++) {
                if (!list.contains(list.get(i) + j)) {
                    counts[i]++;
                };
            }
        }

        int min = counts[0];
        for (int count : counts) {
            if (count <= min) {
                min = count;
            }
        }
        System.out.println(min);
    }
}
