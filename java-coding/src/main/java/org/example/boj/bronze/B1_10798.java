package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class B1_10798 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        List<List<String>> list = new ArrayList<>();
        int max = 0;
        for(int i = 0; i < 5; i++) {
            String str = br.readLine();
            max = Math.max(str.length(), max);
            String[] strs = str.split("");
            List<String> arr = new ArrayList<>(List.of(strs));
            list.add(arr);
        }
        for(int z = 0; z < 5; z++) {
            if(list.get(z).size() < max) {
                int len = max - list.get(z).size();
                for(int j = 0; j < len; j++) {
                    list.get(z).add("");
                }
            }
        }

        String answer = "";

        for(int x = 0; x < max; x++) {
            for(int y = 0; y < list.size(); y++) {
                answer += list.get(y).get(x);
            }
        }

        System.out.println(answer);
    }
}
