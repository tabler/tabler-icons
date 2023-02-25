module Jekyll
  module CustomFilters
    def sort_has_tags(array, key = "tags")
      array.sort_by { |v| v[key].length }
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)
