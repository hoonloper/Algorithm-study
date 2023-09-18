package org.example.boj;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B5_25314 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine()) / 4;

        StringBuilder ans = new StringBuilder();
        for(int i = 0; i < n; i++) {
            ans.append("long").append(" ");
        }
        System.out.println(ans.append("int").toString());
    }
}
