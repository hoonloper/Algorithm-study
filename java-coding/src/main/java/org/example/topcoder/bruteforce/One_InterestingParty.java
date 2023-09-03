package org.example.topcoder.bruteforce;

import java.util.HashMap;
import java.util.Map;

public class One_InterestingParty {
    public static void main(String[] args) {
        String[] first = {"fishing", "gardening", "swimming", "fishing"};
        String[] second = { "hunting", "fishing", "fishing", "biting"};
        int answer = bestInvitation(first, second);

        // 4
        System.out.println(answer);
    }
    public static int bestInvitation(String[] first, String[] second) {
        int answer = 0;

        // Map 활용
        Map<String, Integer> map = new HashMap<>();
        for(int i = 0; i < first.length; i++) {
            map.put(first[i], 0);
            map.put(second[i], 0);
        }

        for(int i = 0; i < first.length; i++) {
            map.put(first[i], map.get(first[i]) + 1);
            map.put(second[i], map.get(second[i]) + 1);
        }

        for(String key: map.keySet()) {
            answer = Math.max(map.get(key), answer);
        }

        // 단순 무식 for 문
//        for(int i = 0; i < first.length; i++) {
//
//            int f = 0;
//            int s = 0;
//            for(int j = 0; j < second.length; j++) {
//                if(first[i] == first[j]) f++;
//                if(first[i] == second[j]) f++;
//                if(second[i] == second[j]) s++;
//                if(second[i] == first[j]) s++;
//            }
//
//            answer = Math.max(answer, f);
//            answer = Math.max(answer, s);
//        }
        return answer;
    }
}
