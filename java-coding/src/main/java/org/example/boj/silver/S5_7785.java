package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class S5_7785 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        Map<String, Boolean> map = new HashMap<>();

        for(int i = 0; i < n; i++) {
            String name = br.readLine().split(" ")[0];
            if(map.getOrDefault(name, false)) {
                map.remove(name);
            } else {
                map.put(name, true);
            }
        }
        String[] arr = map.keySet().toArray(new String[0]);
        Arrays.sort(arr, Collections.reverseOrder());

        StringBuilder sb = new StringBuilder();
        for(String name : arr) {
            sb.append(name).append("\n");
        }
        System.out.println(sb);
    }
}
