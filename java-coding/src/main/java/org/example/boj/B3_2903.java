package org.example.boj;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B3_2903 {
    public static void main(String args[]) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int iter = Integer.parseInt(br.readLine()); // input
        int fir = 2;
        for(int i = 0; i < iter; i++) {
            fir += (int) Math.pow(2, i);
        }
        System.out.println((int) Math.pow(fir, 2));
    }
}
