package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class S5_14912 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] arr = br.readLine().split(" ");
        int n = Integer.parseInt(arr[0]);
        int digit = Integer.parseInt(arr[1]);

        Map<String, Integer> map = new HashMap<>();

        for(int i = 1; i <= n; i++) {
            String[] num = (i + "").split("");

            for(String x : num) {
                if(map.containsKey(x)) {
                    map.put(x, map.get(x) + 1);
                } else {
                    map.put(x, 1);
                }
            }
        }

        System.out.println(map.get(digit + ""));
    }
}
