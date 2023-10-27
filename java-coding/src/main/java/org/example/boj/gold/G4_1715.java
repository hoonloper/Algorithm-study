package org.example.boj.gold;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;

public class G4_1715 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());


        PriorityQueue<Long> queue = new PriorityQueue<>();

        for(int i = 0; i < n; i++) {
            queue.add(Long.valueOf(br.readLine()));
        }

        long num = 0;
        while (queue.size() > 1) {
            long t1 = queue.poll();
            long t2 = queue.poll();
            System.out.println(t1 + t2);
            num += t1 + t2;
            queue.add(t1 + t2);
        }
        System.out.println(num);
    }
}
