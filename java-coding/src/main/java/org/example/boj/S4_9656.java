package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;

public class S4_9656 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader();

        int n = Integer.parseInt(br.readLine());

        System.out.println(n % 2 == 0 ? "SK" : "CY");
    }
}
