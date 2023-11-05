package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class S4_1620 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        Map<Integer, String> book = new HashMap<>();
        Map<String, Integer> book2 = new HashMap<>();

        for(int i = 1; i <= n; i++) {
            String str = br.readLine();
            book.put(i, str);
            book2.put(str, i);
        }

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < m; i++) {
            String str = br.readLine();
            boolean isInt = isInteger(str);
            if(isInt) {
                Integer num = Integer.parseInt(str);
                String name = book.get(num);
                sb.append(name);
            } else {
                Integer key = book2.get(str);
                sb.append(key);
            }
            sb.append("\n");
        }
        System.out.println(sb.toString());
    }

    private static boolean isInteger(String str) {
        try {
            Integer.parseInt(str);
            return true;
        } catch (NumberFormatException ex) {
            return false;
        }
    }
}
