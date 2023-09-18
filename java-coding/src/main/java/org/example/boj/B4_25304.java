package org.example.boj;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B4_25304 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        long total = Long.parseLong(br.readLine());
        int count = Integer.parseInt(br.readLine());

        long money = 0;
        for(int i = 0; i < count; i++) {
            String[] arr = br.readLine().split(" ");
            money += Long.parseLong(arr[0]) * Long.parseLong(arr[1]);
        }
        System.out.println(total == money ? "Yes" : "No");
    }
}
