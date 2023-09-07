package org.example.topcoder.search_scope_limit;

import java.util.Arrays;
import java.util.HashMap;

public class Four_BatchSystem {
    public static void main(String[] args) {
        int[] duration = {400, 100, 100, 100};
        String[] users = {"Danny Messer", "Stella Bonasera", "Stella Bonasera", "Mac Taylor"};
        schedule(duration, users);
    }

    public static void schedule(int[] duration, String[] user) {
        int n = duration.length;

        HashMap<String, Long> jobTime = new HashMap<>();
        for(int i = 0; i < n; i++) {
            jobTime.put(user[i], 0L);
        }
        for(int i = 0; i < n; i++) {
            jobTime.put(user[i], jobTime.get(user[i]) + duration[i]);
        }
        boolean[] done = new boolean[n];
        int[] ans = new int[n];
        int ansCount = 0;
        while (ansCount < n) {
            String next = "";
            for(int i = 0; i < n; i++) {
                if(!done[i] && (next.isEmpty() || jobTime.get(user[i]) < jobTime.get(next))) {
                    next = user[i];
                }
            }

            for(int i = 0; i < n; i++) {
                if(user[i].equals(next)) {
                    done[i] = true;
                    ans[ansCount++] = i;
                }
            }
        }
        System.out.println(Arrays.toString(ans));
    }
}
