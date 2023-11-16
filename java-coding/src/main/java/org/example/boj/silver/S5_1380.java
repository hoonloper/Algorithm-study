package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class S5_1380 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringBuilder sb = new StringBuilder();
        int count = 1;
        while (true) {
            String input = br.readLine();
            if(input.equals("0")) {
                break;
            }
            int n = Integer.parseInt(input);


            List<String> list = new ArrayList<>();

            for(int i = 0; i < n; i++) {
                list.add(br.readLine());
            }

            List<Integer> checked = new ArrayList<>();
            for(int i = 0; i < n * 2 - 1; i++ ) {
                StringTokenizer st = new StringTokenizer(br.readLine());
                Integer num = Integer.parseInt(st.nextToken());

                if (checked.contains(num)) {
                    checked.remove(num);
                } else {
                    checked.add(num);
                }
            }

            System.out.println(count++ + " " + list.get(checked.get(0) - 1));
        }
    }
}
