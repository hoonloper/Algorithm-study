package org.example.boj;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class B5_10807 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        String[] arr = br.readLine().split(" ");
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < n; i++) {
            int num = Integer.parseInt(arr[i]);
            if(map.containsKey(num)) {
                map.put(num, map.get(num) + 1);
            } else {
                map.put(num, 1);
            }
        }

        int target = Integer.parseInt(br.readLine());

        System.out.println(map.getOrDefault(target, 0));
    }
}
