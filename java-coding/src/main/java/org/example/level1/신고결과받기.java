package org.example.level1;

import java.util.*;

public class 신고결과받기 {
    public static void main(String[] args) {
        String[] id_list = { "muzi", "frodo", "apeach", "neo" };
        String[] report = {"muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"};
        int k = 2;
        Map<String, Integer> idMap = new HashMap<>();

        for(String id : id_list) {
            idMap.put(id, 0);
        }

        Map<String, List<String>> reportMap = new HashMap<>();

        for(String r: report) {
            String[] spliced = r.split(" ");
            List<String> reports = reportMap.get(spliced[0]);
            if(reports == null) {
                List<String> s = new ArrayList<>();
                s.add(spliced[1]);
                reportMap.put(spliced[0], s);
                Integer count = idMap.get(spliced[1]);
                idMap.put(spliced[1], ++count);
            } else if (!reports.contains(spliced[1])) {
                reports.add(spliced[1]);
                Integer count = idMap.get(spliced[1]);
                idMap.put(spliced[1], ++count);
            }
        }


        List<String> benUser = new ArrayList<>();

        for(String id: id_list) {
            if(idMap.get(id) >= k) {
                benUser.add(id);
            }
        }

        int[] answer = new int[id_list.length];
        for(int i = 0; i < id_list.length; i++) {
            int c = 0;
            for(String ben: benUser) {
                if(reportMap.get(id_list[i]) != null && reportMap.get(id_list[i]).contains(ben)) {
                    c++;
                }
            }
            answer[i] = c;
        }
        System.out.println(Arrays.toString(answer));
    }
}