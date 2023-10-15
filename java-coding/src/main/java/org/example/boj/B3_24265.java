package org.example.boj;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B3_24265 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        System.out.println((long) n * (n - 1) / 2);
        System.out.println(2);
    }
}
