package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class S2_19583 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] times = br.readLine().split(" ");

        String[] sts = times[0].split(":");
        int start = (Integer.parseInt(sts[0]) * 60) + Integer.parseInt(sts[1]);
        String[] ends = times[1].split(":");
        int end = (Integer.parseInt(ends[0]) * 60) + Integer.parseInt(ends[1]);
        String[] streams = times[2].split(":");
        int streaming = (Integer.parseInt(streams[0]) * 60) + Integer.parseInt(streams[1]);

        Map<String, Boolean> map = new HashMap<>();

        String brStr = br.readLine();
        while (brStr != null) {
            String[] info = brStr.split(" ");
            String[] time = info[0].split(":");
            String name = info[1];

            int timeNum = Integer.parseInt(time[0]) * 60 + Integer.parseInt(time[1]);
            if(timeNum <= start) {
                map.put(name, true);
            }
            if(map.containsKey(name) && map.get(name) && end <= timeNum && timeNum <= streaming){
                map.put(name, false);
            }
            brStr = br.readLine();
        }

        int count = 0;
        for(Boolean is:map.values()) {
            if(!is) count++;
        }
        System.out.println(count);
    }
}
