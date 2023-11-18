package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class S4_1235 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        String[] arr = new String[n];
        for(int i = 0; i < n; i++) {
            arr[i] = br.readLine();
        }

        int len = arr[0].length();
        int answer = 0;
        boolean flag = false;
        for(int i = len - 1; i >= 0; i--) {
            List<String> list = new ArrayList<>();
            for(int j = 0; j < n; j++) {
                String str = arr[j].substring(i);
                if(list.contains(str)) {
                    flag = false;
                    break;
                }
                list.add(str);
                flag = true;
            }
            answer++;
            if(flag) {
                break;
            }
        }

        System.out.println(answer);
    }
}
