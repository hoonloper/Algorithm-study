package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S4_12871 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s1 = br.readLine();
        String s2 = br.readLine();

        StringBuilder S = new StringBuilder(s1);
        StringBuilder T = new StringBuilder(s2);

        if(s1.length() != s2.length()) {
            int len = LCM(s1.length(), s2.length());

            while (S.length() != len) {
                S.append(s1);
            }

            while (T.length() != len) {
                T.append(s2);
            }
        }

        int answer = S.toString().contentEquals(T) ? 1 : 0;
        System.out.println(answer);
    }

    static int GCD(int a, int b) {
        while (b > 0) {
            int temp = a;
            a = b;
            b = temp % b;
        }

        return a;
    }

    static int LCM(int a, int b) {
        return (a * b) / GCD(a, b);
    }
}