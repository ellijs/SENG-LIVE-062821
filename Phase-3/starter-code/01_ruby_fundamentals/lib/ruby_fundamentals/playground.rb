require 'pry'
require 'awesome_print'

def get_episodes
    friends["_embedded"]["episodes"]
end

def get_episode_names
    friends["_embedded"]["episodes"].map {|
episode| episode["name"] }
end

def get_episode_name(season_number, episode_number)
    friends["_embedded"]["episodes"].find {|episode| (episode["season"] == season_number) && (episode["number"] == episode_number) }["name"]
end

def get_episodes_by_season(season_number)
    friends["_embedded"]["episodes"].filter {|episode| episode["season"] == season_number}
end

def who_played(character_name)
    friends["_embedded"]["cast"].find {|cast| cast["character"]["name"] == character_name }["person"]["name"]
end

def get_episode_by_name (episode_name)
    friends["_embedded"]["episodes"].find {|episode| episode["name"] == episode_name }
end
