package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S5_1543 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s1 = br.readLine();
        String s2 = br.readLine();

        System.out.println((s1.length() - s1.replace(s2, "").length()) / s2.length());
    }
}
