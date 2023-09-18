package org.example.boj;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B5_5597 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        boolean[] arr = new boolean[30];
        for(int i = 0; i < 28; i++) {
            arr[Integer.parseInt(br.readLine()) - 1] = true;
        }

        StringBuilder ans = new StringBuilder();
        for(int i = 0; i < 30; i++) {
            if(!arr[i]) {
                ans.append(i + 1).append("\n");
            }
        }
        System.out.println(ans.toString());
    }
}
