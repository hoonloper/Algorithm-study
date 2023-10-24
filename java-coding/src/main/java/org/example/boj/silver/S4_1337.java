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


        int[] count = new int[n];

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < 5; j++) {
                if (!list.contains(list.get(i) + j)) {
                    count[i]++;
                }
            }
        }

        int min = count[0];
        for(int c : count) {
            if(min >= c) {
                min = c;
            }
        }

        System.out.println(min);
    }
}
