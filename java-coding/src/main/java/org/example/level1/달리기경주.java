package org.example.level1;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class 달리기경주 {
    public static void main(String[] args) {
        String[] players = {"mumu", "soe", "poe", "kai", "mine"};
        String[] callings = {"kai", "kai", "mine", "mine"};

        Map<Integer, String> rank = new HashMap<Integer, String>();
        Map<String, Integer> player = new HashMap<String, Integer>();

        for(int i = 0; i < players.length; i++) {
            rank.put(i + 1, players[i]);
            player.put(players[i], i + 1);
        }

        for(String call: callings) {
            int index = player.get(call);
            int index2 = player.get(rank.get(index - 1));
            String pl = call;
            String pl2 = rank.get(index - 1);
            player.put(call, index2);
            player.put(rank.get(index - 1), index);
            rank.put(index, pl2);
            rank.put(index2, call);
        }

        System.out.println(Arrays.toString(rank.values().toArray(new String[0])));
    }
}