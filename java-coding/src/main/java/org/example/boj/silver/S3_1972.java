package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class S3_1972 {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String inputStr;
        StringBuilder sb = new StringBuilder();
        while(!(inputStr = br.readLine()).equals("*")) {
            List<String> list = new ArrayList<>();
            int len = inputStr.length();
            boolean isSurprise = true;

            for(int i = 1; i < len; i++) {
                list.clear();
                for(int j = 0; j < len - i; j++) {
                    String str = inputStr.charAt(j) + Character.toString(inputStr.charAt(j + i));
                    list.add(str);
                }
                Collections.sort(list);
                for(int k = 0; k < list.size() - 1; k++) {
                    if(list.get(k).equals(list.get(k + 1))) {
                        isSurprise = false;
                        break;
                    }
                }
                if(!isSurprise) {
                    break;
                }
            }

            sb.append(inputStr).append(isSurprise ? " is surprising." : " is NOT surprising.").append("\n");
        }
        System.out.println(sb);
    }
}
